import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const images = [
            { id: 1, imgName: 'Doraemon', source: '../../assets/image/Doraemon.png' },
            { id: 2, imgName: 'Nobita', source: '../../assets/image/Nobita.png' }
        ];
        return {images};
    }
}
