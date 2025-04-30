/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 12:16:09
 * @LastEditTime: 2025-04-26 16:10:44
 * @LastEditors: renlirong
 */
// 搜索框需要支持模糊搜索并防止频繁请求

import { useState, useEffect, useRef, useCallback } from 'react';
// import axios from 'axios';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // 防抖计时器引用
  const debounceTimer = useRef(null);
  
  // 请求控制器引用（用于取消未完成请求）
  const abortController = useRef(new AbortController());

  // 缓存搜索结果
  const cache = useRef(new Map());

  // 模糊匹配逻辑（可选前端实现）
  const fuzzyMatch = (items, searchTerm) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // 实际搜索函数
  const performSearch = useCallback(async (searchTerm) => {
    try {
      setIsSearching(true);
      
      // 优先检查缓存
      if (cache.current.has(searchTerm)) {
        setResults(cache.current.get(searchTerm));
        return;
      }

      // 发起 API 请求
      const response = await fetch('/api/search', {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(searchTerm)
      })
      setResults(response.json())

      // 处理模糊匹配（如果后端未实现）
      // const filtered = fuzzyMatch(data, searchTerm); 
      
      // 更新缓存和状态
      cache.current.set(searchTerm, data);
    } catch (err) {
      throw new Error('fail')
    } finally {
      setIsSearching(false);
    }
  }, []);

  // 输入处理（防抖 + 请求管理）
  useEffect(() => {
    // 清空旧定时器
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // 取消未完成请求
    abortController.current.abort();
    abortController.current = new AbortController();

    // 空查询处理
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // 设置新防抖定时器
    debounceTimer.current = setTimeout(() => {
      performSearch(query.trim());
    }, 300);

    // 清理函数
    return () => clearTimeout(debounceTimer.current);
  }, [query, performSearch]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入关键词..."
        />
        {isSearching && <span className="loading-indicator" />}
      </div>

      {results.length > 0 && (
        <ul className="search-results">
          {results.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};