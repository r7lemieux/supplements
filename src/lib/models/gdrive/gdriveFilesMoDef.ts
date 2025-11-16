import {MoDefinition, type MoInterface} from 'svelte-mos'
import {Mo} from 'svelte-mos'

export const gdriveFilesMoDef = new MoDefinition('GDriveFiles')
gdriveFilesMoDef.displayName = 'Google Drive'
// todo why do  the complier bug on this one
gdriveFilesMoDef.moClass = Mo as unknown as MoInterface
gdriveFilesMoDef.hasId = true
const fieldnames = ['id', 'mimeType', 'name', 'modifiedTime', 'size']
gdriveFilesMoDef.addFieldDefsFromNames(fieldnames)

