import styles from '../styles/table'

import React from 'react'
import classNames from 'classnames'
import { translate } from '../lib/I18n'

import File from '../components/File'

const FileList = ({
  t, f, files, error, showSelection, onFileEdit, onFileEditAbort, onFolderOpen, onFileToggle, onShowActionMenu
}) => (
  <div className={classNames(
    styles['fil-content-table'],
    { [styles['fil-content-table-selection']]: showSelection }
  )}>
    <div className={styles['fil-content-row']}>
      <div className={classNames(styles['fil-content-header'], styles['fil-content-file-select'])} />
      <div className={classNames(styles['fil-content-header'], styles['fil-content-file'])}>{ t('table.head_name') }</div>
      <div className={classNames(styles['fil-content-header'], styles['fil-content-date'])}>{ t('table.head_update') }</div>
      <div className={classNames(styles['fil-content-header'], styles['fil-content-size'])}>{ t('table.head_size') }</div>
      <div className={classNames(styles['fil-content-header'], styles['fil-content-status'])}>{ t('table.head_status') }</div>
    </div>
    <div className={styles['fil-content-body']}>
      {!error && files.map((file, idx) => (
        <File
          onEdit={onFileEdit}
          onEditAbort={onFileEditAbort}
          onOpen={onFolderOpen}
          onToggle={onFileToggle}
          onShowActionMenu={onShowActionMenu}
          attributes={file}
          showSelection={showSelection}
        />
      ))}
    </div>
  </div>
)

export default translate()(FileList)