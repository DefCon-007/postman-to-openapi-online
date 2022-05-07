import styles from '@styles/schemaView.module.scss';


function SchemaView(props) {
  const schema = props.schema;

  if (!schema) {
    return (
      <></>
    )
  } else {
    const lines = schema.split('\n');

    return (
      <pre className={styles.codeContainer}>
        {
          lines.map((line) => {
            return (
              <span className={styles.line}>{line}</span>
            )
          })
        }
      </pre>
    );
  }
}

export default SchemaView
