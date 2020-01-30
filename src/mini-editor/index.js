/*
 * @Author: ly525
 * @Date: 2019-11-02 10:55:15
 * @LastEditors: ly525
 * @LastEditTime: 2020-01-30 16:07:51
 * @FilePath: /lbc-button/src/mini-editor/index.js
 * @Github: https://github.com/ly525/luban-h5
 * @Description: Do not edit
 */
import LbpComponent from '../component/index.js'

import PropsPanel from './panels/props.js'
import Element from './models/element.js'

import CanvasWrapper from './wraper/canvas.js'
import PropsPanelWrapper from './wraper/props.js'

export default {
  name: 'app',
  data: () => ({
    editingElement: null
  }),
  components: {
    LbpComponent,
    PropsPanel
  },
  created () {
    this.editingElement = new Element(LbpComponent)
  },
  render (h) {
    return (
      <a-layout>
        <a-layout-header class="header">
          <div class="logo"><span class="text" style={{ color: 'white' }}>鲁班H5组件开发脚手架</span></div>
        </a-layout-header>
        <a-layout>
          <CanvasWrapper>
            {
              this.editingElement && h('lbp-component', this.editingElement.getPreviewData())
            }
          </CanvasWrapper>
          <PropsPanelWrapper>
            <props-panel editingElement={this.editingElement} />
          </PropsPanelWrapper>
        </a-layout>
      </a-layout>
    )
  }
}
