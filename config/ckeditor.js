"use strict";

module.exports = {
  /**
   * Community CKEditor plugin (@_sh/strapi-plugin-ckeditor)
   * Presets define what the editor loads (toolbar/plugins/config).
   */
  presets: {
    defaultHtml: {
      /**
       * For HTML storage fields
       */
      output: "HTML",
      editorConfig: {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "link",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
            "code",
            "codeBlock",
            "|",
            "insertTable",
            "|",
            "undo",
            "redo",
          ],
        },

        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
          ],
        },

        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },

        // Keep HTML output clean-ish
        // (You can relax/tighten later depending on your needs)
        htmlSupport: {
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true,
            },
          ],
        },
      },
    },

    defaultMarkdown: {
      /**
       * If you ever want Markdown fields
       */
      output: "Markdown",
      editorConfig: {
        toolbar: {
          items: [
            "bold",
            "italic",
            "link",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
            "code",
            "codeBlock",
            "|",
            "undo",
            "redo",
          ],
        },
      },
    },
  },
};
