const { Web3Storage } = require("web3.storage")

function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFFRDA1NDg2Q0YyZGNhNzlkMDc5NzE1RjRlZDg0ZDhCRTQwYTIxQ0MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODkyNTkwODYzMDcsIm5hbWUiOiJNaW50eVBsZXgifQ.ZnHpT4IyFDtnOtu6Bi_10YzzrHnFqcq8Kt2OLGP29GA"
}

async function storeFiles(mfiles) {
  const client = new Web3Storage({ token: getAccessToken() })
  const cid = await client.put(mfiles)
  return cid
}

export const UploadImages = async (files, item_name, description, category) => {

  let cid = {}
  const total = Object.keys(files).length

  let a = await storeFiles(files);
  cid = a + '/' + files[0].name

  const obj = {
    images_url: cid,
    name: item_name,
    description: description,
    category: category,
  };

  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  let ufiles = [new File([blob], item_name + ".json")];
  let metaCid = await storeFiles(ufiles);

  return [ufiles, cid, metaCid + "/" + item_name + ".json", item_name, description, category];
}