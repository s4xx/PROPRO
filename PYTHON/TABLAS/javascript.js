function obtenerInfoAnimal() {
    const animalSelect = document.getElementById('animal-select');
    const selectedAnimal = animalSelect.value;
  
    if (selectedAnimal in tabla7['R001']) {
      const animalKey = 'A00' + selectedAnimal;
      const animalType = tabla7['R005'][animalKey];
      const animalHabitat = tabla7['R002'][`T00${selectedAnimal}`];
      const animalClassification = tabla7['R003']['H002'];
      const animalDiet = tabla7['R004']['L001'];
      const animalCategory = tabla7['R005'][`D00${selectedAnimal}`];
      const animalCovering = tabla7['R006']['P001'];
  
      const animalInfo = `
        <p>Nombre: ${tabla7['R001'][animalKey]}</p>
        <p>Tipo: ${animalType}</p>
        <p>Hábitat: ${animalHabitat}</p>
        <p>Clasificación: ${animalClassification}</p>
        <p>Dieta: ${animalDiet}</p>
        <p>Categoría: ${animalCategory}</p>
        <p>Cobertura: ${animalCovering}</p>
      `;
  
      // Abrir ventana emergente con la información del animal
      const popupWindow = window.open('', '_blank', 'width=400,height=400');
      popupWindow.document.body.innerHTML = animalInfo;
    } else {
      alert("No existe información para este animal.");
    }
  }
  