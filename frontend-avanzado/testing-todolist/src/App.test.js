import {mount} from 'enzyme';
import App from './App'

describe('grupo de tests', () => {
  it('input vacio', () => {
    const component = mount(<App />);
    const input = component.find('#input')
    const button = component.find('#button')

    const oldTask = component.find('li')

    input.simulate('change', {target: {value: ''}}); 
    button.simulate('click');

    const newTask = component.find('li')

    expect(oldTask.length).toBe(newTask.length)
  });

  it('input value vacio luego de click', () => {
  const component = mount(<App />);
  const input = component.find('#input')
  const button = component.find('#button')

  input.simulate('change', {target: {value: 'hola'}}); 
  button.simulate('click');

  expect(input.text()).toBe('')
  });

  // it('task renderea correctamente', () => {
  // const component = mount(<App />);
  // const input = component.find('#input')
  // const button = component.find('#button')

  // input.simulate('change', {target: {value: 'hola'}}); 
  // button.simulate('click');
  // const task = component.find('li')

  // expect(task.text()).toBe('hola')
  // });

  // it('longitud inicial de tasks = 0', () => {
  // const component = shallow(<Tasks />);
  // const tasks = component.find('li')

  // expect(tasks.length).toBe(0)
  // });

  // it('agregar 3 tasks, longitud = 3', () => {
  // const component = mount(<App />);
  // const input = component.find('#input')
  // const button = component.find('#button')

  // input.simulate('change', {target: {value: 'que onda'}}); 
  // button.simulate('click');

  // input.simulate('change', {target: {value: 'la banda'}}); 
  // button.simulate('click');

  // input.simulate('change', {target: {value: 'bb'}}); 
  // button.simulate('click');

  // const tasks = component.find('li')

  // expect(tasks.length).toBe(3)
  // });

  it('task agregada correctamente', () => {
  const component = mount(<App />);
  const input = component.find('input')
  const button = component.find('button')

  const oldTasks = component.find('li')

  input.simulate('change', {target: {value: 'que onda'}}); 
  button.simulate('click');

  const newTasks = component.find('li')

  expect(newTasks.length).toBe(oldTasks.length + 1)
  });

  it('task agregada correctamente v2', () => {
    const component = mount(<App />);
    const input = component.find('input')
    const button = component.find('button')
  
    input.simulate('change', {target: {value: 'que onda'}}); 
    button.simulate('click');
  
    const tasks = component.find('li')
  
    expect(tasks.at(tasks.length - 1).text()).toBe('que onda')
    });
})