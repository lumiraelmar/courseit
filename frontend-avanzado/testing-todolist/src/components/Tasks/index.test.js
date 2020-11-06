import {mount} from 'enzyme';
import Tasks from './index'

describe('grupo de tests', () => {
  it('task renderea correctamente', () => {
    const component = mount(<Tasks tasks={[]}/>);
    const tasks = component.find('li');

    expect(tasks).toHaveLength(0);
  });

  it('3 tasks longitud = 3', () => {
    const component = mount(<Tasks tasks={[1, 2, 3]}/>);
    const tasks = component.find('li');

    expect(tasks).toHaveLength(3);
  });
})