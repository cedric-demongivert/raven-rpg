import { ReadableFileSystem } from './ReadableFileSystem'
import { WritableFileSystem } from './WritableFileSystem'

export interface FileSystem extends ReadableFileSystem, WritableFileSystem {

}
