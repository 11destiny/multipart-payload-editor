/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   multipart-file-form-item.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts" />
/// <reference path="../paper-input/paper-input.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../iron-collapse/iron-collapse.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="multipart-form-item-behavior.d.ts" />

/**
 * A file form item.
 */
declare class MultipartFileFormItem extends
  Polymer.IronValidatableBehavior(
  Polymer.Element) {

  /**
   * Computed value, true if the control has a file.
   */
  readonly hasFile: boolean|null|undefined;

  /**
   * Name of this control
   */
  name: string|null|undefined;

  /**
   * Valuie of this control.
   */
  value: string|null|undefined;

  /**
   * A view model.
   */
  model: object|null|undefined;

  /**
   * True to render documentation (if set in model)
   */
  docsOpened: boolean|null|undefined;

  /**
   * Toggles documentation (if available)
   */
  toggleDocumentation(): void;
  _getValidity(): any;

  /**
   * Tests if current value is a type of `Blob`.
   *
   * @param value Value to test
   */
  _computeHasFile(value: String|Blob|File|null|undefined): Boolean|null;

  /**
   * A handler to choose file button click.
   * This function will find a proper input[type="file"] and programatically click on it to open
   * file dialog.
   */
  _selectFile(): void;

  /**
   * A handler to file change event for input[type="file"].
   * This will update files array for corresponding `this.filesList` array object.
   */
  _fileObjectChanged(e: any): void;

  /**
   * Computes the `accept`attribute for file input.
   */
  _computeAccept(model: any): any;
}

interface HTMLElementTagNameMap {
  "multipart-file-form-item": MultipartFileFormItem;
}