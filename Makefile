# tjex.net

deploy: 
	yarn build
	git add -u
	git commit -m "local build"
	git push

clean:
	rm -rf dist
	mkdir dist
	yarn build
