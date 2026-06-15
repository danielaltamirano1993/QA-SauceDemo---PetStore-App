describe('API PetStore Test Suite', () => {
  const petId = 123456789; // ID único para nuestra mascota

  it('Debería realizar el ciclo de vida de una mascota', () => {
    
    // 1. Añadir una mascota (POST)
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
      id: petId,
      name: 'Firulais',
      status: 'available'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    // 2. Consultar la mascota (GET)
    cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Firulais');
    });

    // 3. Actualizar nombre y estado (PUT)
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
      id: petId,
      name: 'Firulais Actualizado',
      status: 'sold'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    // 4. Consultar por estado "sold" (GET)
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
      .then((response) => {
        expect(response.status).to.eq(200);
        // Validamos que nuestra mascota esté en la lista
        const petFound = response.body.find(pet => pet.id === petId);
        expect(petFound.name).to.eq('Firulais Actualizado');
    });
  });
});