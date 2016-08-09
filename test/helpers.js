export const expectInit = ($httpBackend) => {
  $httpBackend.expectGET('templates/navigation.html').respond('');
  $httpBackend.expectGET('templates/page.html').respond('');
};
