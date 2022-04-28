import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>123 456 7890</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link passHref="/">Homepage</Link></li>
          <li className={styles.listItem} ><Link passHref="/product/1">Products</Link></li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt='' width="100px" height="100px" />
          <li className={styles.listItem}><Link passHref="/orders/1">Orders</Link></li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} >
          <Link passHref="/cart"><Image src="/img/cart.png" alt="" width="30px" height="30px"/></Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar