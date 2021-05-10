declare namespace kintone {
  namespace fieldTypes {
    interface SingleLineText {
      /**
       * trueを指定することで、プログラムからルックアップが実行されます
       */
      lookup?: boolean;
    }
  }

  /**
   * イベント実行時に受け取るプロパティ
   */
  type Event = {
    appId: number;
    viewId: number;
    recordId: number;
    record: Record<string, any>;
    error: string;
    url: string;
    type: EventType;
    changes?: {
      field: {
        type: string;
        value: string;
      };
      row: any;
    };
  };

  /**
   * プラグインID
   */
  const $PLUGIN_ID: string;

  namespace plugin {
    /**
     * プラグインがアプリ単位で保存する設定情報
     */
    type Storage = {
      conditions: Condition[];
    };

    type Condition = {
      fileField: string;
      size: {
        width: number;
        height: number;
      };
    };
  }

  /**
   * イベントタイプ(changeイベントを除く)
   */
  type EventType =
    | 'app.record.index.show'
    | 'app.record.index.edit.show'
    | 'app.record.index.edit.submit'
    | 'app.record.index.edit.submit.success'
    | 'app.record.index.delete.submit'
    | 'app.record.detail.show'
    | 'app.record.detail.delete.submit'
    | 'app.record.detail.process.proceed'
    | 'app.record.create.show'
    | 'app.record.create.change'
    | 'app.record.create.submit'
    | 'app.record.create.submit.success'
    | 'app.record.edit.show'
    | 'app.record.edit.change'
    | 'app.record.edit.submit'
    | 'app.record.edit.submit.success'
    | 'app.record.print.show'
    | 'mobile.app.record.index.show'
    | 'mobile.app.record.detail.show'
    | 'mobile.app.record.detail.delete.submit'
    | 'mobile.app.record.detail.process.proceed'
    | 'mobile.app.record.create.show'
    | 'mobile.app.record.create.change'
    | 'mobile.app.record.create.submit'
    | 'mobile.app.record.create.submit.success'
    | 'mobile.app.record.edit.show'
    | 'mobile.app.record.edit.change'
    | 'mobile.app.record.edit.submit'
    | 'mobile.app.record.edit.submit.success';
}
