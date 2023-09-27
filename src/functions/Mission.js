import axios from "axios";

export const CreateMission = async (data) => {
try {
    const response = await axios.post(
        `${process.env.REACT_APP_API}/param/param_create`,
        data
      );
    return response.data;
} catch (error) {
    console.error(error);
    throw error;
}
}