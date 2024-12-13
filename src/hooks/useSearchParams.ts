// // 'use client'
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export const useSearchParams = (initialState = {}) => {
//   const router = useRouter();
//   const [state, setState] = useState(initialState);

// //   useEffect(() => {
// //     setState(router.query);
// //   }, [router.query]);

// //   const setQueryParams = (query = {}) => {
// //     router.push({ pathname: router.pathname, query }, undefined, {
// //       shallow: true,
// //     });
// //   };

//   return [state, setQueryParams];
// };

