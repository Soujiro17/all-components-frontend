import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'WvUxYCWxGyyWQjnp-hLr1sQagz6yALDXXoiGLHAeQGJTFfvFl4CCEyN8qWnMKgQBPzl_d-gMK9Xhhxl0UZRdCFcGdeuCusmrctlOpUDOB2KNejiGWcStqNNEe9B1hixOFyu8_nAK2NwiLyOTuNP0IIU8ynHbej_nNeubOhKkSeM'
    }
});

export default axiosInstance