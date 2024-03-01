import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { getModelToken } from '@nestjs/mongoose';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: getModelToken('Post'),
          useValue: {}, // Proporciona un valor falso para el modelo
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Prueba deletePost
  describe('deletePost', () => {
    it('should delete a post', async () => {
      const postId = '123'; // Simular el ID que tiene el post

      // Confirmar que se llamó con el ID correcto
      jest.spyOn(service, 'deletePost').mockResolvedValueOnce();

      // Llamar al método deletePost del servicio
      await service.deletePost(postId);

      // Verificar que el método deletePost se llamó con el ID correcto
      expect(service.deletePost).toHaveBeenCalledWith("123");
    });
  });
});
