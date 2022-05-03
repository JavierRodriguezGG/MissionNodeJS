const MissionCommander = require('../app/missionCommander');
describe("Prueba de unidad MissionCommander class", () => {
    test('1) Create a mission commander objet', () => {
      const myMissionCommander =  new MissionCommander("Woopa!!!")
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  