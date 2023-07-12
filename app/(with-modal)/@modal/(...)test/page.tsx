export default function TestPageIntercepted() {
  async function action(data: FormData) {
    "use server";
    data.forEach((val, key) => console.log(key, val));
  }

  return (
    <form action={action}>
      in "modal"
      <button type="submit">Test</button>
    </form>
  );
}
