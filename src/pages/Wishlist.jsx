import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000//wishlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        .catch((error) => console.error('Error fetching wishlist:', error));
    }
  }, [user?.email]);
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist