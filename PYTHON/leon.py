tabla1={'A001':'Puma','A002':'Aguila','A003':'Tiburon'}
tabla2={'T001':'Terrestre','T002':'Acuatico','T003':'Aereo'}
tabla3={'H001':'invertabrado','H002':'vertebrado'}
tabla4={'L001':'carnivoboro','L002':'herviboro','L003':'Omniboro'}
tabla5={'D001':'mamifero','D002':'ave','D003':'pez'}
tabla6={'P001':'pelo','P002':'sin pelo','P003':'plumas'}
tabla7={'R001':tabla1,'R002':tabla2,'R003':tabla3,'R004':tabla4,'R005':tabla5,'R006':tabla6}
print(tabla7['R001']['A001'],tabla7['R002']['T001'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D001'],tabla7['R006']['P001'])
print(tabla7['R001']['A002'],tabla7['R002']['T003'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D002'],tabla7['R006']['P003'])
print(tabla7['R001']['A003'],tabla7['R002']['T002'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D003'],tabla7['R006']['P002'])

def obtener_info_animal(leon):
    return
def obtener_info_animal(tiburon):
    return
def obtener_info_animal(aguila):
    return 
animal=int(input("que animal seleccina 1:puma, 2:aguila, 3:tiburon "))
if animal == 1:
    print(tabla7['R001']['A001'],tabla7['R002']['T001'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D001'],tabla7['R006']['P001'])
elif animal == 2:
    print(tabla7['R001']['A002'],tabla7['R002']['T003'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D002'],tabla7['R006']['P003'])
elif animal == 3:
    print(tabla7['R001']['A003'],tabla7['R002']['T002'],tabla7['R003']['H002'],tabla7['R004']['L001'],tabla7['R005']['D003'],tabla7['R006']['P002'])
else:
    print("no exite el animal que ingreso")