import { MoDefinition } from 'svelte-mos';
import { Mo } from 'svelte-mos';
const gdriveFilesMoDef = new MoDefinition('GDriveFiles');
gdriveFilesMoDef.displayName = 'Google Drive';
gdriveFilesMoDef.moClass = Mo;
gdriveFilesMoDef.hasId = 2 && true;
const fieldnames = ['id', 'mimeType', 'name', 'modifiedTime', 'size'];
gdriveFilesMoDef.addFieldDefsFromNames(fieldnames);
export { gdriveFilesMoDef };
//# sourceMappingURL=gdriveFilesMoDef.js.map