'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('medicine', [{
      nameMedicine: 'Paracetamol (Acetaminophen)',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      nameMedicine: 'Aspirin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Ibuprofen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Amoxicillin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Cetirizine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Loratadine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Omeprazole  ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Simvastatin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Metformin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Lisinopril',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Atorvastatin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Ranitidine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Metoprolol',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Hydrochlorothiazide',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Warfarin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Prednisone',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Fluoxetine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Sertraline',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Pantoprazole',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Gabapentin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Amlodipine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Tramadol',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Citalopram',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Losartan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Azithromycin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Clonazepam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Diazepam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Albuterol',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Metronidazole',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nameMedicine: 'Dexamethasone',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('medicine', null, {});
  }
};
