import axios from "axios";

const loginService = async (dni, password) => {
  try {
    const header = new Headers({ dni, password });
    const response = await axios.post("", header);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default loginService;
