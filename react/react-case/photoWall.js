// 图片墙高性能加载方案，结合虚拟滚动 + 渐进加载 + 缓存优化，实现千级图片流畅渲染

import { useState, useEffect, useCallback } from 'react';
import { FixedSizeGrid } from 'react-window';
import {LazyImage as ImageItem} from './LazyImage'
/*
* 原理：
* 1. 建立图片组件，懒加载
* 2. 建立图片墙组件，结合分页建立查询API，放在useEffect。图片墙使用react-window的 FixedSizeGrid，itemData采用所有图片的数组。
* 3. 定义FixedSizeGrid的onScroll事件，输入是ScrollHeight,ClientHeight,ScrollTop。
* 如果ScrollHeight-ScrollTop-ClientHeight < threshhold，就修改分页。
*/




// 图片墙主体
const ImageWall = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const columnCount = 4; // 根据容器宽度动态计算更佳
  

  // 加载图片数据
  const loadImages = useCallback(async (pageNum) => {
    try {
      const response = await fetch(`/api/images?page=${pageNum}`);
      if (!response.ok) {
        throw new Error(`HTTP 错误 ${response.status}`);
      }
      const data = await response.json();
      setImages(prev => [...prev, ...data]);
    } catch (err) {
      console.error('加载失败:', err);
    }
  }, []);

  // 滚动到底部加载更多
  const handleScroll = ({ scrollTop, clientHeight, scrollHeight }) => {
    const threshold = 500;
    if (scrollHeight - scrollTop - clientHeight < threshold) {
      loadImages(page + 1);
      setPage(p => p + 1);
    }
  };

  return (
    <FixedSizeGrid
      columnCount={columnCount}
      columnWidth={300}
      rowCount={Math.ceil(images.length / columnCount)}
      rowHeight={300}
      width={1200}
      height={800}
      itemData={{ 
        images,
        columnCount 
      }}
      onScroll={handleScroll}
    >
      {ImageItem}
    </FixedSizeGrid>
  );
};

