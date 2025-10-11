import {MoDefinition} from 'svelte-mos'
import {Mo} from 'svelte-mos'

export const gdriveFilesMoDef = new MoDefinition('GDriveFiles')
gdriveFilesMoDef.displayName = 'Google Drive'
gdriveFilesMoDef.moClass = Mo
gdriveFilesMoDef.hasId = true
const fieldnames = ['id', 'mimeType', 'name', 'modifiedTime', 'size']
gdriveFilesMoDef.addFieldDefsFromNames(fieldnames)

