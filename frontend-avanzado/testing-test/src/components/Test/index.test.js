import Test from './index';
import { shallow } from 'enzyme'

it('Test sum correct values', () => {
  const component = shallow(<Test />);

  component.find('#first').simulate('change', {target: {name: 'first', value: 20}}); 
  
  component.find('#second').simulate('change', {target: {name: 'second', value: 3}}); 

  component.find('#sum-button').simulate('click');

  expect(component.find('#sum').text()).toBe("23")
})