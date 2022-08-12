import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ToDo from '../ToDo.vue'

describe('ToDo.vue', () => {
  test('props text', () => {
    const wrapper = mount(ToDo, { props: { item: { id: 0, text: 'salam', completed: false } } })
    expect(wrapper.text()).toContain('salam')
  })

  test('props completed', () => {
    const wrapper = mount(ToDo, { props: { item: { id: 0, text: '', completed: false } } })
    expect(wrapper.find('button').classes('done')).toBe(true);

  })

  test('props completed', () => {
    const wrapper = mount(ToDo, { props: { item: { id: 0, text: '', completed: true } } })
    expect(wrapper.find('img').classes('tick')).toBe(true);

  })

  test("emits event when done button is clicked", async () => {
    const wrapper = mount(ToDo, { props: { item: { id: 0, text: '', completed: false } } });
    const closeButton = wrapper.find("button.done");
    await closeButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("done");
  });
})


