export async function GetOrders() {
  const res = await fetch(
    "https://api-quickqueue-9d311ca15f87.herokuapp.com/api/Order",
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return res.json();
}
