import Suma from './index';
import { shallow } from 'enzyme'
describe("test del componente suma", () => {
  it('test ok', () => {
    //logica del test
    expect(true).toBe(true)
  });
  it('talgo', () => {
    const wrapper = shallow(<Suma />);
    console.log(wrapper.debug())
    expect(wrapper.find('p').text()).toBe('0')
  });
  
})