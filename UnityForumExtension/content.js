// This function replaces all occurrences of "$$anonymous$$" with "hi"
function replaceText() {
    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      for (let j = 0; j < element.childNodes.length; j++) {
        const node = element.childNodes[j];
        if (node.nodeType === 3) {
          const text = node.nodeValue;
          const replacedText = text.replace(/\$\$anonymous\$\$/g, 'hi');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
  
  // Check if the URL matches the desired pattern before running the replaceText() function
  if (window.location.href.startsWith("https://answers.unity.com/")) {
    replaceText();
  
    // Call the function again whenever the page is updated (i.e., when the user navigates to a new page on the Unity forums)
    document.addEventListener('DOMSubtreeModified', replaceText);
  }