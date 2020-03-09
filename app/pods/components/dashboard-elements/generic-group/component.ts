import Component from '@glimmer/component';

interface DashboardElementsGenericGroupArgs {
  type: string;
}

export default class DashboardElementsGenericGroup extends Component<DashboardElementsGenericGroupArgs> {
  get newType() {
    let returnValue = {
      type1: "type1",
      type2: "type2"
    }
    return returnValue;

  }
}
