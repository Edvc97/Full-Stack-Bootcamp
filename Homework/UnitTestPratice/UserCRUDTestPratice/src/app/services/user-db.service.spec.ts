import { TestBed } from '@angular/core/testing';

import { User, UserDbService } from './user-db.service';

describe('UserDbService', () => {
  let service: UserDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createUser function', () => {
    it('Should return user', () => {

      //Arrange
      const name = 'Ed';


      //Act
      const result = service.createUser(name);

      //Assert
      expect(result).toBeTruthy();

    });

    it('Should call randomUUID once', () => {

      //Arrange
      const name = 'Ed';
      
      spyOn(crypto, 'randomUUID');

      //Acts
      service.createUser(name);

      //Assert
      expect(crypto.randomUUID).toHaveBeenCalledTimes(1);

    });

    it('Should trim the name', () => {

      //Arrange
      const name = '  Ed  ';

      //Acts
      const result = service.createUser(name);

      //Assert
      expect((result as User).name).toBe('Ed'); // Type assertion to access the name property

    });

  });




  describe('createUser function', () => {
    it('Should return user', () => {

      //Arrange
      const name = 'Ed';


      //Act
      const result = service.createUser(name);

      //Assert
      expect(result).toBeTruthy();

    });

    it('Should call randomUUID once', () => {

      //Arrange
      const name = 'Ed';
      
      spyOn(crypto, 'randomUUID');

      //Acts
      service.createUser(name);

      //Assert
      expect(crypto.randomUUID).toHaveBeenCalledTimes(1);

    });
    
  });






});
