import { authAxiosInstance ,axiosInstance} from "../instance/axios";



export const globalGetService = (url, params) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: "get",
      url: url,
      params: params,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      });
  });
};

export const globalPostService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: "POST",
      url: url,
      data: data,
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error)
    });
  });
};

export const globalPatchService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: "PATCH",
      url: url,
      data: data,
    }).then((response) => {
      resolve(response);
    })
      .catch((error) => {
        reject(error)
      });
  });
};

// PUT API Call
export const globalPutService = (url, data) => {
  return new Promise(
    function (resolve, reject) {
      axiosInstance({
        method: 'PUT',
        url: url,
        data: data
      })
        .then(response => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    }
  )
}
// DELETE API Call
export const globalDeleteService = (url, data) => {
  return new Promise(
    function (resolve, reject) {
      axiosInstance({
        method: 'DELETE',
        url: url,
        data: data
      })
        .then(response => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        })
    }
  )
}


//Auth service

export const authPostService = (url, data) => {
  return new Promise(function (resolve, reject) {
    authAxiosInstance({
      method: "POST",
      url: url,
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authGetService = (url, params) => {
  return new Promise(function (resolve, reject) {
    authAxiosInstance({
      method: "get",
      url: url,
      params: params,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      });
  });
};





