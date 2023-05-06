# Messyroutes

Dynamically adding routes without "resetting" config.

## Why?
Because if you add dynamic routes through `router.resetConfig`,
Angular does the entire routing from the root and that can be bad
if you have nested outlets.
<https://github.com/angular/angular/issues/38326>

That's the only other way for dynamic routes 
<https://github.com/angular/angular/issues/9527>

The parent component of a nested outlet would be loaded again.