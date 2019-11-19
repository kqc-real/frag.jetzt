import { Provider } from '../../../models/util/Provider';


export class FrameType {

  public static provide = Provider.create(FrameType);

  constructor(private type: string) {
  }

  public getFrameType(): string {
    return this.type;
  }

  public getOppositeFrameType(): string {
    if (this.isRow()) {
      return 'col';
    } else if (this.isCol()) {
      return 'row';
    }
    return null;
  }

  public isRow(): boolean {
    return this.type === 'row';
  }

  public isCol(): boolean {
    return this.type === 'col';
  }

}
