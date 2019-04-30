import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';

@Injectable()
export class PublicApiService {

    public async getServices(): Promise<object> {
        return new Promise((resolve, reject) => {
          readFile(__dirname + '/../Data/services.json', (err, data) => {
            return err ? reject('Failed to read a file : services.json') : resolve({groups: JSON.parse(data.toString())});
          });
        });
    }
}
