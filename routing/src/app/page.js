import Link from 'next/link';
export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href='/admins'>Admins</Link>
        </li>
        <li>
          <Link href='/users2'>Users</Link>
        </li>
      </ul>
    </>
  );
  // return (
  //   <>
  //     <h1>I am home</h1>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link href='/users'>Users</Link>
  //         </li>
  //         <li>
  //           <Link href='/users/profile/66'>Users 66</Link>
  //         </li>
  //       </ul>
  //       <Nav />
  //     </div>
  //   </>
  // );
}
