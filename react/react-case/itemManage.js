/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 10:26:24
 * @LastEditTime: 2025-04-26 11:25:59
 * @LastEditors: renlirong
 */
// 虚拟滚动 + 分页加载的商品管理页
import { useState, useEffect, useRef, useCallback } from "react";
import { FixedSizeList } from "react-window";

// 单商品项组件
const ProductItem = ({ data, index, style }) => {
    const item = data[index];
    return (
      <div style={style} className="product-item">
        <img src={item.thumbnail} alt={item.name} />
        <h3>{item.name}</h3>
        <p>价格: {item.price}</p>
        {/* 其他商品信息 */}
      </div>
    );
  };


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef();
  
  // 获取滚动容器引用
  const outerRef = useRef();

  // 加载数据函数
  const loadProducts = useCallback(async (pageNum) => {
    if (isLoading || !hasMore) return;
    
    try {
      setIsLoading(true);
      const res = await fetch(`/api/products?page=${pageNum}`);
      const { items, hasMore: newHasMore } = await res.json();
      
      setProducts(prev => [...prev, ...items]);
      setHasMore(newHasMore);
      setPage(pageNum);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore]);

  // 滚动事件处理（带节流）
  const handleScroll = useCallback((e) => {
    const scrollContainer = e.target;
    const { scrollTop, clientHeight, scrollHeight } = scrollContainer;
    
    // 计算距离底部阈值（例如提前200px加载）
    const threshold = 200; 
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;

    if (isNearBottom) {
      loadProducts(page + 1);
    }
  }, [page, loadProducts]);

  // 初始化加载 + 绑定滚动监听
  useEffect(() => {
    loadProducts(1);
    const scrollContainer = outerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="product-list">
      <FixedSizeList
        ref={listRef}
        outerRef={outerRef}  // 关键：获取外部滚动容器
        height={600}
        width="100%"
        itemSize={150}
        itemCount={products.length}
        itemData={products}
      >
        {({ index, style, data }) => (
          <div style={style}>
            <ProductItem data={data} index={index} />
          </div>
        )}
      </FixedSizeList>
      
      {isLoading && <div className="loading">加载中...</div>}
      {!hasMore && <div className="no-more">已加载全部商品</div>}
    </div>
  );
};

export default ProductList;





import { useState, useEffect } from 'react';

// 税号校验正则（示例：15位或18位数字/字母组合）
const TAX_ID_REGEX = /^[A-Z0-9]{15}$|^[A-Z0-9]{18}$/;

const OrderForm = () => {
  const [formData, setFormData] = useState({
    invoiceType: 'personal',
    taxId: ''
  });
  
  // 校验状态增加 touched 标记
  const [validation, setValidation] = useState({
    error: '',
    touched: false // 标记字段是否被操作过
  });

  const isEnterprise = formData.invoiceType === 'enterprise';

  // 统一校验函数
  const validateTaxId = (value) => {
    if (!value.trim()) return '税号不能为空';
    if (!TAX_ID_REGEX.test(value)) return '税号格式应为15或18位数字/大写字母';
    return '';
  };

  // 输入变化处理（实时校验）
  const handleTaxIdChange = (e) => {
    const value = e.target.value.toUpperCase();
    const error = validateTaxId(value);
    
    setFormData(prev => ({ ...prev, taxId: value }));
    setValidation(prev => ({
      ...prev,
      error,
      touched: true // 输入即视为 touched
    }));
  };

  // 失焦时二次校验（提升错误提示可见性）
  const handleTaxIdBlur = () => {
    if (!validation.touched) return;
    const error = validateTaxId(formData.taxId);
    setValidation(prev => ({ ...prev, error }));
  };

  // 提交处理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 企业发票需要强制校验
    if (isEnterprise) {
      const error = validateTaxId(formData.taxId);
      if (error) {
        setValidation({ error, touched: true });
        return;
      }
    }

    console.log('提交数据:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 发票类型选择 */}
      <div>
        <label>发票类型：</label>
        <select
          name="invoiceType"
          value={formData.invoiceType}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, invoiceType: e.target.value }));
            // 切换类型时重置校验状态
            if (e.target.value !== 'enterprise') {
              setValidation({ error: '', touched: false });
            }
          }}
        >
          <option value="personal">个人发票</option>
          <option value="enterprise">企业发票</option>
        </select>
      </div>

      {/* 动态税号字段 */}
      {isEnterprise && (
        <div>
          <label>纳税人识别号：</label>
          <input
            type="text"
            value={formData.taxId}
            onChange={handleTaxIdChange}
            onBlur={handleTaxIdBlur}
            placeholder="请输入15或18位税号"
            className={`tax-input ${validation.error ? 'error' : ''}`}
          />
          {validation.touched && validation.error && (
            <div className="error-message">{validation.error}</div>
          )}
        </div>
      )}

      <button type="submit">提交</button>
    </form>
  );
};