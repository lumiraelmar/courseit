import {shallow} from 'enzyme';
import Task from './index'

describe('grupo de tests', () => {
  it('task renderea correctamente', () => {
    const component = shallow(<Task task='prueba'/>);
    const task = component.find('li')

    expect(task.text()).toBe('prueba')
  });
})