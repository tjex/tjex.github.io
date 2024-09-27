# tjex.net

deploy: 
	astro build
	git add -u
	git commit -m "local build"
	git push

clean:
	rm -rf dist
	mkdir dist
	astro build
