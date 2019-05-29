import axios, { AxiosInstance } from 'axios';
import imgur_configs from 'Configs/imgur';

export default class ThumbnailUploader {
  private readonly customAxios: AxiosInstance;

  constructor() {
    this.customAxios = axios.create({
      baseURL: imgur_configs.api_url,
      headers: imgur_configs.headers
    });
  }

  /**
   * Upload base64 encoded image to imgur API.
   * 
   * @returns Resolve uploaded image url
   */
  public async uploadBase64(image: string): Promise<string> {
    try {
      const response = await this.customAxios({
        method: 'post',
        url: '/upload',
        data: {
          image: image,
          type: 'base64'
        }
      });
    
      return Promise.resolve(response.data.data.link);
    } catch (err) {
      return Promise.reject(err.response.data.data.error.message);
    }
  }
}
