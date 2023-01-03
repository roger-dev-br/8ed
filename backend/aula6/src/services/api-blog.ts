import axios from "axios";

// Instancia do Axios para acessar a API de Blog
const apiBlog = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjM5MjI4M2ItNjNlYy00NWI5LWJhM2YtN2Q0MWE5YzNjMjI4IiwibHVpZCI6ImV6dm9sdCIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjcyNzg1NDM2LCJleHAiOjE3MDQzMjE0MzZ9.eGbn9asnFgRyCgkIXA130c4FkiITMS2UpkN8k44HKpxP1L19p4TAeD6H2144eZ7aTA3ETz4AT_9WZagp-LpJSPWd-aiPLnSBRGLeoJU5nXKImqoUK8Cjqoi_CT8amBQAsp1QRw8vpVVH2p0nFRmhDwwYPRxWjMY55JTlLgomTcVYYI0sZe9_GGLbTEn0s1GO0JVnQaOMnTp9-H4zN0U9Iik_48pKXuk28W54fmOm7c8-R9jyrgsjJbr_f4b1J0jBRC0grXmFO1kwSwRKlEUDld1Lr4Ic8azY09bVu-ZKGf5zJXJ1AyltpRGW_3XMlKr3_rnkHVr47xPs4sW7Y0kcwQ",
  },
});

export { apiBlog };
