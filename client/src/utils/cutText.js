function cutText(content, maxLength) {
	if (content.length < 1) return 'Error';
	if (content.lenght <= maxLength) return content;
	return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};

export default cutText;
