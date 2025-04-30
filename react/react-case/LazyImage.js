/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 12:49:44
 * @LastEditTime: 2025-04-26 16:54:29
 * @LastEditors: renlirong
 */
// 实现图片的懒加载


/*
 * 原理：
 * 1. 在Image的父组件div上绑定应用，作为observer的对象，观察其是否进入视窗
 * 2. 定义观察的对象observer，并在useEffect里面启用观察。
 * 3. observer对象用new IntersectionObserver，回调函数中，用进isIntecting判断进入视窗，设置img的visible。然后关掉观察，避免重复
 * 4. useEffect返回断开观察的函数
 */

// Your Code
const LazyImage = ({src})=>{
  const [isVisible,setIsVisible] = useState(false)
  const imgRef = useRef()
  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setIsVisible(true)
        observer.unobserve(imgRef.current)
      }

    })
    observer.observe(imgRef.current)
    return ()=>{
      observer.disconnect()
    }
  },[])

  return (
    <div ref = {imgRef}>
      {isVisible &&<img src = {src}/>}
    </div>
  )
}



// function LazyImage({ src }) {
//     const [isVisible, setIsVisible] = useState(false);
//     // Observer的对象
//     const imgRef = useRef(); // 通过useRef创建的引用，绑定到包裹图片的<div>元素，用于观察其是否进入视口
  
//     useEffect(() => {
//       // 浏览器API，用于异步观察目标元素与视口的交叉状态
//       const observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(imgRef.current);
//         }
//       });
      
//       observer.observe(imgRef.current);
//       return () => observer.disconnect();
//     }, []);
  
//     return (
//       <div ref={imgRef}>
//         {isVisible && <Image src={src} placeholder={<Spin />} />}
//       </div>
//     );
//   }