const ulrBase = "https://api.unsplash.com/photos/?client_id=";
const key = "ZYuE0eTat_vuSyePIxQ6PUqESvposLDGx7b1yXZxyms";
const url = `${ulrBase}${key}`;

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

export { getData };
