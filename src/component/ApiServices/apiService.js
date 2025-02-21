import { globalDeleteService, globalGetService, globalPostService, globalPutService } from "../../utilis/globalApiServices";

const fetchSectionList = async () => {
    try {
      const response = await globalGetService();
      return response;
    } catch (error) {
      console.error(`Error fetching list :`, error);
      throw error;
    }
  };

  const deleteSection = async (id) => {
    try {
      const response = await globalDeleteService(`/${id}`);
      return response;
    } catch (error) {
      console.error(`Error deleting `, error);
      throw error;
    }
  };
  
  const postSectionList = async (data) => {
    try {
      const response = await globalPostService('',data);
      return response;
    } catch (error) {
      console.error(`Error creating item ":`, error);
      throw error;
    }
  };
  const updateSectionList = async (id, data) => {
    try {
      const response = await globalPutService(`/${id}`, data);
      return response;
    } catch (error) {
      console.error(`Error updating item  and ID "${id}":`, error);
      throw error;
    }
  };


  export const apiService = {
    fetchSectionList,
    postSectionList,
    deleteSection,
    updateSectionList
  }