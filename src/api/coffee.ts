import request from '../utils/request';
export const getAllCoffees = async () => {
  return request(`/coffee`, {
    method: 'GET',
  }).then((res: any) => {
    if (!res.success) {
      throw new Error(res.data.message);
    }
    return res;
  });
};
