export default function DashboardLayout(props) {
  const condition = true;

  return (
    <>
      {props.children}
      {condition ? props.analytics : props.posts}
    </>
  );
}
